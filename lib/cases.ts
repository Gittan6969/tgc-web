import fs from 'node:fs';
import path from 'node:path';

export type CaseItem = {
  slug: string;
  title: string;
  industry: string;
  stats: string[];
  summary: string;
};

const CASE_DIR = path.join(process.cwd(), "content", "case");

export function getAllCases(): CaseItem[] {
  const files = fs.readdirSync(CASE_DIR).filter(f => f.endsWith(".json"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CASE_DIR, file), "utf8");
    const data = JSON.parse(raw);
    return { slug: file.replace(".json",""), ...data } as CaseItem;
  });
}

export function getCaseBySlug(slug: string): CaseItem | null {
  const file = path.join(CASE_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const data = JSON.parse(raw);
  return { slug, ...data } as CaseItem;
}
