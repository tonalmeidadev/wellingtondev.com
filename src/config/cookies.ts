'use server'

import { cookies } from 'next/headers'

export async function createCookie(name: string, value: string): Promise<void> {
  const store = await cookies()
  store.set(name, value)
}

export async function getCookie(name: string): Promise<string | undefined> {
  const store = await cookies()
  const cookie = store.get(name)
  return cookie?.value
}
