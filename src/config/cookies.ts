'use server'

import { cookies } from 'next/headers'

export async function createCookie(name: string, value: string): Promise<void> {
  cookies().set(name, value)
}

export async function getCookie(name: string): Promise<string | undefined> {
  const cookie = cookies().get(name)
  return cookie?.value
}
