import { Request, Response } from "express";
import { Router } from "express";
import { Contact } from "../model/contact";

export const router = Router();

router.post("/contact", async (req: Request, res: Response) => {
  try {
    const { body } = req;

    if (!body) {
      return res.status(400).json({ message: "Bad request !" });
    }

    const contact = new Contact(body);

    await contact.save();

    return res.status(200).json({ status: "ok", message: "Contact was saved" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
});
