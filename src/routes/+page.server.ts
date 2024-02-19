import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { emailSchema } from './zodSchema';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { PRIVATE_SUPABASE_SERVICE_ROLE } from '$env/static/private';

const supabase = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_SERVICE_ROLE)
export const actions = ({
    default: async ({ request }) => {
        const formData = await request.formData()
        const email = formData.get('email')

        const safeParse = emailSchema.safeParse(email)
        if (!safeParse.success) {

            console.log(safeParse)
            return fail(400, { message: safeParse.error.issues[0] });
        }

        if (safeParse.success) {
            const { error } = await supabase
                .from('beta_signups')
                .insert({ email })

            if (error && error.code == '23505') {
                return fail(400, { message: `${email} already registered` })
            }

            if (error) {
                return fail(400, { message: "something went wrong" });

            }

        }
        return { success: true }
    }
}) satisfies Actions