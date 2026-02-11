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
          throw new Error(text || "Something went wrong. Please try again.");
        }
      }

      setServerState({ status: "success" });
      reset(defaultValues);
    } catch (err) {
      setServerState({
        status: "error",
        message: err instanceof Error ? err.message : "Submission failed.",
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
              <p className="font-semibold">Request received.</p>
              <p className="text-emerald-800">
                We&apos;ll get back to you in &lt; 24 hours. If it&apos;s urgent, email{" "}
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
          <p className="font-semibold">Couldn&apos;t submit your request.</p>
          <p className="mt-1 text-red-800">{serverState.message}</p>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
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
          <Label htmlFor="lastName">Last Name *</Label>
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
          <Label htmlFor="organization">Organization *</Label>
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
          <Label>Role</Label>
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="Role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Performance Coach">Performance Coach</SelectItem>
                  <SelectItem value="Medical Staff">Medical Staff</SelectItem>
                  <SelectItem value="Director/Analyst">Director/Analyst</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sport">Sport / Discipline</Label>
          <Input id="sport" placeholder="e.g. Football, Rugby, Basketball" {...register("sport")} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Number of Athletes</Label>
          <Controller
            control={control}
            name="athleteCount"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="Number of Athletes">
                  <SelectValue placeholder="Select a range" />
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
          <Label>How did you hear about us?</Label>
          <Controller
            control={control}
            name="heardFrom"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="How did you hear about us">
                  <SelectValue placeholder="Optional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Referral">Referral</SelectItem>
                  <SelectItem value="Conference/Event">Conference/Event</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Google/Search">Google/Search</SelectItem>
                  <SelectItem value="Podcast/Newsletter">Podcast/Newsletter</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us what devices, workflows, or report types you care about."
          {...register("message")}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Request Demo"
          )}
        </Button>

        <div
          className={cn(
            "inline-flex items-center gap-2 text-sm text-gray-600",
            isSubmitting ? "opacity-60" : "",
          )}
        >
          <Mail className="h-4 w-4" />
          Typical response time: <span className="font-semibold">&lt; 24 hours</span>
        </div>
      </div>
    </form>
  );
}
