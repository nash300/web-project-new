import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ctishtsbuaiuzoscjyfd.supabase.co";

const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0aXNodHNidWFpdXpvc2NqeWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2ODI0MzMsImV4cCI6MjAyMTI1ODQzM30.WkLDhWXPqdEWaRJ3hH1FgqdYrcibD7lKMng-L4fEJtY";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
