import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton({ inverse = false }: { inverse?: boolean }) {
  return (
    <Button
      asChild
      variant="ghost"
      className={inverse ? "mb-6 text-navy-foreground hover:bg-navy-foreground/10 hover:text-signal" : "mb-6"}
    >
      <Link to="/" aria-label="Retourner à la page d'accueil">
        <ArrowLeft aria-hidden="true" />
        Retour à l'accueil
      </Link>
    </Button>
  );
}