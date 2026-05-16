# Post-deploy SEO checklist

After deploying to Vercel, complete these steps (no custom domain required).

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property: `https://johnstone-fencing.vercel.app` (URL prefix).
3. Verify using the existing file `googleca23444bffc5e8c3.html` (already in the repo).
4. Submit sitemap: `https://johnstone-fencing.vercel.app/sitemap.xml`
5. Use **URL inspection** → **Request indexing** once for:
   - `/`
   - `/services`
   - `/about`
   - `/contact`
   - `/greater-sydney`
   - `/central-coast`
   - `/newcastle`
   - `/southern-highlands`

## Google Business Profile

1. Create or claim a profile for **Johnstone Fencing** (trading as JOHNSTONE CIVIL PTY LTD).
2. Set **website** to: `https://johnstone-fencing.vercel.app`
3. Match **phone** (`0400 755 781`), **email** (`admin@johnstonecivil.com.au`), and **ABN** (`52 662 020 662`) to the website footer.
4. Add service areas: Greater Sydney, Central Coast, Newcastle/Hunter, Southern Highlands.
5. Upload photos of completed fencing jobs.
6. Ask satisfied customers for Google reviews over time.

## Bing Webmaster Tools (optional)

1. Add site at [Bing Webmaster](https://www.bing.com/webmasters).
2. Submit the same sitemap URL.

## Citations (NAP consistency)

Use the **same** name, phone, and website on every listing:

| Field | Value |
|-------|--------|
| Business name | Johnstone Fencing |
| Legal entity | JOHNSTONE CIVIL PTY LTD |
| Phone | 0400 755 781 |
| Email | admin@johnstonecivil.com.au |
| Website | https://johnstone-fencing.vercel.app |
| Location | Sydney NSW |

Update hipages, Apple Maps, True Local, and any other directories to match.

## When you buy a custom domain later

1. Add the domain in the Vercel project settings.
2. Replace `https://johnstone-fencing.vercel.app` in all HTML files, `sitemap.xml`, and JSON-LD (search for `SITE_URL` comments).
3. Add a **301 redirect** in `vercel.json` from `johnstone-fencing.vercel.app` to the new domain.
4. Update Google Business Profile and Search Console to the new domain.
5. Resubmit the sitemap.
