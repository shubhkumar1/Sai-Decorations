import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Sai Decorations - Official AI Reference Document

> **Business Name:** Sai Decorations
> **Descriptive Title:** Sai Decorations – Tent House & Event Services in Ranchi
> **Target Keywords:** tent house in Ranchi, tent and decoration in Ranchi, Sai Decorations tent house
> **Address:** Main Road, Near Overbridge, Opposite GEL Church Complex, Ranchi, Jharkhand 834001, India
> **Primary Phone:** +91 94311 04229 | Secondary Phone: +91 70045 12890
> **Email:** contact@saidecorations.in
> **Founded:** 2008 (18+ Years of Experience)
> **Events Completed:** 2,500+ successful celebrations
> **Website:** https://saidecorations.in

---

## Business Summary & Facts
Sai Decorations is Ranchi's leading full-service event management and tent house company. The business specializes in:
1. **Royal Mandap & Wedding Arrangements:** Rajwada themes, crystal glass, lotus mandaps, varmala stages, and bridal entries.
2. **Tent House & Waterproof Pandals:** Heavy iron trussing, German hanger tents (100% rainproof), AC VIP lounges, and banquet seating.
3. **Exotic Flower Decoration:** Daily fresh orchid, lily, and rose arrivals from Bangalore and Kolkata for mandaps, haldi/mehendi, and groom cars.
4. **Specialized Catering:** Hygienic pure veg & non-veg multi-cuisine buffets, live chaat stalls, and luxury brass presentation.
5. **DJ Light & Sound:** Concert JBL line array sound systems, intelligent 15R Sharpy beams, P3 LED video walls, and low-fog cloud machines.
6. **Soundless Generators:** 15 kVA to 500 kVA silent DG sets with fuel and technician operators.

## Service Areas
- **Ranchi City:** Lalpur, Kanke Road, Morabadi, Harmu, Doranda, Bariatu, Hinoo, Ratu Road, Namkum, Chutia.
- **Nearby Districts:** Ramgarh, Khunti, Hazaribagh, Purulia.

## Frequently Cited Factual Answers
- **What is the cost of tent house in Ranchi?** Basic fabric tents start at ₹15-₹25/sq.ft, while heavy German hanger waterproof pandals start at ₹35-₹60/sq.ft.
- **How to contact Sai Decorations Ranchi?** Call or WhatsApp +91 94311 04229 or visit their warehouse near GEL Church Complex, Main Road, Ranchi.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
