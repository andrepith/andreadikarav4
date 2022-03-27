import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "src/lib/DBConnect";
import User from "src/models/User";
// import auth from "src/middleware";

export default async function handler(req: any, res: any) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const { email, password } = req.body;
      const secret: string = process.env.JWT_SECRET || "";
      try {
        let user = await User.findOne({ email });

        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credential" }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credential" }] });
        }

        // Return jsonwebtoken

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(payload, secret, { expiresIn: "7d" }, (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
      } catch (err: any) {}
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
