import jwt from 'jsonwebtoken';

const auth = (handler: any) => async (req: any, res: any) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      // Handle the case where the JWT secret is not defined
      throw new Error("JWT secret is not defined");
    }
    // Get the token from the request headers
    const token = await req.headers["x-auth-token"];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the token
    const decoded : any = jwt.verify(token, jwtSecret);

    // Set the user ID on the request object for use in the endpoint function
    req.user = { id: decoded.user.id };

    // Call the handler function with the authenticated request
    return handler(req, res);
  } catch (error: any) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default auth;