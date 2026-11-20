import { ProductBrand } from "@/components/ProductBrand";

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <><header className="privacy-brand"><ProductBrand /></header>{children}</>;
}
