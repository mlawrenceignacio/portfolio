import { supabase } from "./supabase";
import type { Certification, MessageFormData, Project, Skill } from "../types";

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("year", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("name", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getCertifications(): Promise<Certification[]> {
  const { data, error } = await supabase
    .from("certifications")
    .select("*")
    .order("year", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function submitMessage(payload: MessageFormData) {
  const { error } = await supabase.from("messages").insert([payload]);

  if (error) {
    throw error;
  }

  const { error: functionError } = await supabase.functions.invoke(
    "send-contact-email",
    {
      body: payload,
    },
  );

  if (functionError) {
    throw functionError;
  }
}
