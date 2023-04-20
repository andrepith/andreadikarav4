import dbConnect from "src/lib/DBConnect";
import auth from "src/middleware/auth";
import Bio from "src/models/Bio";

const handler = async (req: any, res: any) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const bio = await Bio.findOne();
        res.json(bio);
      } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default auth(handler);