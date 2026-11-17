'use server';

import { createClient } from '../lib/supServer';
import { revalidatePath } from 'next/cache';

export async function eliminarProducto(id) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('Productos')
        .delete()
        .eq('id', id)
        .select('id');

    if (error) {
        console.error('Error al eliminar producto:', error.message);
        throw new Error('No se pudo eliminar el producto');
    }

    if (!data || data.length === 0) {
        throw new Error(
            'No se eliminó ningún producto. Verifica el ID y los permisos de Supabase.'
        );
    }

    revalidatePath('/productos');

    return { success: true };
}
