import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are a friendly and knowledgeable marketing assistant for SignalForge, a full-service marketing automation and digital growth agency based in Greater Boston, MA.

Your job is to help visitors understand SignalForge's services, answer questions about marketing automation, and encourage them to book a free strategy call.

SignalForge services:
- Marketing Automation (Constant Contact, Klaviyo, HubSpot)
- SMS Marketing
- Social Media Campaigns
- Ad Creative Design
- Website Design and Build
- Event Marketing

Key facts:
- Authorized Constant Contact reseller partner
- Campaigns live within 48 hours
- Free 30-minute strategy call available
- Based in Greater Boston, MA
- Contact: hello@signalforge.marketing

Rules:
- Keep answers SHORT — 2 to 3 sentences maximum
- Be friendly and conversational, not salesy
- Always end with a gentle nudge to book a free call or visit the contact page when relevant
- If asked about pricing, direct them to book a call for a custom quote
- Never make up facts or statistics you are not sure about`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json({ message: 'Sorry, something went wrong. Please try again.' }, { status: 500 });
  }
}