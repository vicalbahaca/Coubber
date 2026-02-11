"use client";

import { useState } from "react";
import { z } from "zod";
import { Loader2, MailCheck } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const emailSchema = z.string().email();

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      return;
    }

    // Prelaunch stub: connect to your email provider later.
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 450));
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <p className="text-sm font-semibold text-gray-900">Boletín</p>
      <p className="text-sm text-gray-600">
        Notas ocasionales sobre reportes y novedades del producto.
      </p>
      <div className="flex gap-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@equipo.com"
          aria-label="Correo electrónico"
        />
        <Button type="submit" variant="secondary" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando
            </>
          ) : (
            "Suscribirse"
          )}
        </Button>
      </div>
      {status === "success" ? (
        <div className="flex items-center gap-2 text-sm font-semibold text-success">
          <MailCheck className="h-4 w-4" />
          Te has suscrito.
        </div>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-danger">Introduce un email válido.</p>
      ) : null}
    </form>
  );
}
