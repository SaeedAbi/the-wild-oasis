import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://muylubfjtddpwadyfmvj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eWx1YmZqdGRkcHdhZHlmbXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MzA0NTYsImV4cCI6MjAzNTQwNjQ1Nn0.Ki4lVQbyEdzXhcO2s_d9_ZwLE7UqPWRiMVVfwZvlDiU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase