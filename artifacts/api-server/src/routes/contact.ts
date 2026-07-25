import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  // Honeypot spam check
  if (req.body.honeypot) {
    // Silently succeed to not reveal the honeypot
    res.status(201).json({ id: 0, fullName: "", email: "", inquiryType: "", createdAt: new Date().toISOString() });
    return;
  }

  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact form submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { honeypot: _honeypot, ...data } = parsed.data;

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values({
      fullName: data.fullName,
      organization: data.organization ?? null,
      email: data.email,
      phone: data.phone ?? null,
      country: data.country ?? null,
      inquiryType: data.inquiryType,
      message: data.message,
      privacyConsent: data.privacyConsent,
    })
    .returning();

  req.log.info({ id: submission.id, inquiryType: submission.inquiryType }, "Contact form submitted");

  res.status(201).json(
    SubmitContactResponse.parse({
      id: submission.id,
      fullName: submission.fullName,
      email: submission.email,
      inquiryType: submission.inquiryType,
      createdAt: submission.createdAt.toISOString(),
    })
  );
});

export default router;
