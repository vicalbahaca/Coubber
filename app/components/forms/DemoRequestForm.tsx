"use client";

import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";

import { demoRequestSchema, type DemoRequestInput } from "@/app/components/forms/demoSchema";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import { cn } from "@/app/lib/utils";

type ServerState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export function DemoRequestForm() {
  const [serverState, setServerState] = useState<ServerState>({ status: "idle" });

  const defaultValues = useMemo<DemoRequestInput>(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      role: undefined,
      sport: "",
      athleteCount: undefined,
      heardFrom: undefined,
      message: "",
    }),
    [],
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoRequestInput>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues,
    mode: "onBlur",
  });

  async function onSubmit(values: DemoRequestInput) {
    setServerState({ status: "idle" });
    try {
      // GitHub Pages deploy is static (no backend). If you set a public endpoint
      // (e.g. Formspree / Getform / your API), we can POST to it from the client.
      const endpoint = process.env.NEXT_PUBLIC_DEMO_ENDPOINT;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(text || "Algo salió mal. Inténtalo de nuevo.");
        }
      }

      setServerState({ status: "success" });
      reset(defaultValues);
    } catch (err) {
      setServerState({
        status: "error",
        message: err instanceof Error ? err.message : "No se pudo enviar.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {serverState.status === "success" ? (
        <div className="rounded-xl border border-success/20 bg-emerald-50 p-4 text-sm text-emerald-900">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-success" />
            <div className="space-y-1">
              <p className="font-semibold">Solicitud de acceso anticipado recibida.</p>
              <p className="text-emerald-800">
                Te responderemos en &lt; 24 horas. Si es urgente, escribe a{" "}
                <a
                  className="font-semibold underline"
                  href="mailto:hello@coubber.com"
                >
                  hello@coubber.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {serverState.status === "error" ? (
        <div className="rounded-xl border border-danger/20 bg-red-50 p-4 text-sm text-red-900">
          <p className="font-semibold">No se pudo enviar tu solicitud.</p>
          <p className="mt-1 text-red-800">{serverState.message}</p>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre *</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p className="text-sm text-danger">{errors.firstName.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Apellido *</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p className="text-sm text-danger">{errors.lastName.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-danger">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organización *</Label>
          <Input
            id="organization"
            autoComplete="organization"
            aria-invalid={Boolean(errors.organization)}
            {...register("organization")}
          />
          {errors.organization ? (
            <p className="text-sm text-danger">{errors.organization.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Rol</Label>
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="Rol">
                  <SelectValue placeholder="Selecciona tu rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Preparador físico">Preparador físico</SelectItem>
                  <SelectItem value="Equipo médico">Equipo médico</SelectItem>
                  <SelectItem value="Director/Analista">Director/Analista</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sport">Deporte / Disciplina</Label>
          <Input
            id="sport"
            placeholder="p. ej. fútbol, rugby, baloncesto"
            {...register("sport")}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Número de atletas</Label>
          <Controller
            control={control}
            name="athleteCount"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="Número de atletas">
                  <SelectValue placeholder="Selecciona un rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-20">1-20</SelectItem>
                  <SelectItem value="21-50">21-50</SelectItem>
                  <SelectItem value="51-100">51-100</SelectItem>
                  <SelectItem value="100+">100+</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label>¿Cómo nos conociste?</Label>
          <Controller
            control={control}
            name="heardFrom"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="Cómo nos conociste">
                  <SelectValue placeholder="Opcional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recomendación">Recomendación</SelectItem>
                  <SelectItem value="Conferencia/Evento">Conferencia/Evento</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Google/Búsqueda">Google/Búsqueda</SelectItem>
                  <SelectItem value="Podcast/Newsletter">Podcast/Newsletter</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          placeholder="Cuéntanos qué dispositivos, flujos de trabajo o tipos de informe te interesan."
          {...register("message")}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            "Solicitar acceso anticipado"
          )}
        </Button>

        <div
          className={cn(
            "inline-flex items-center gap-2 text-sm text-gray-600",
            isSubmitting ? "opacity-60" : "",
          )}
        >
          <Mail className="h-4 w-4" />
          Tiempo de respuesta típico:{" "}
          <span className="font-semibold">&lt; 24 horas</span>
        </div>
      </div>
    </form>
  );
}
