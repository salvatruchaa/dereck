'use server'
 
import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function iniciarSesion(formData) {
  const supabase = await createClient()
 
  const data = {
    email: formData.email,
    password: formData.password,
  }
 
  const { error } = await supabase.auth.signInWithPassword(data)
 
  if (error) {
    console.error('Error al iniciar sesión:', error.message)
    return { error: error.message }
  }
 
  revalidatePath('/', 'layout')
  redirect(formData.destino || '/productos')
}
