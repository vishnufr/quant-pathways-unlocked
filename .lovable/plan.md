

## Plan: Backend & Auth, Live Code Editor, Dark Mode Toggle + Recommendations

### 1. Dark Mode Toggle
The dark mode CSS variables already exist in `index.css`. Need to:
- Wrap `App.tsx` with `ThemeProvider` from `next-themes` (already installed)
- Add a theme toggle button (Sun/Moon icon) to `Navigation.tsx`

### 2. Backend & Auth (Supabase)
**Requires Supabase connection first.** The Auth page already has UI scaffolding. Implementation:
- Connect Supabase via the green Supabase button in the sidebar
- Create an `AuthProvider` context with `onAuthStateChange` + `getSession`
- Create a `profiles` table (name, avatar, account_type) with RLS
- Create a `user_roles` table per security requirements
- Create a trigger to auto-create profile on signup
- Update `Auth.tsx` to use real Supabase `signUp`/`signInWithPassword`
- Add `ProtectedRoute` wrapper for `/dashboard`
- Update `Navigation.tsx` to show user avatar / sign out when authenticated
- Create a `user_progress` table to persist lesson completion, XP, streaks

### 3. Live Code Editor
Replace the static `<pre>` code block in `Lesson.tsx` "Practice" tab with an interactive editor:
- Use **Monaco Editor** (`@monaco-editor/react`) -- the VS Code editor component
- Add Python syntax highlighting with a starter template per lesson
- Include a "Run" button that shows simulated output (actual execution would need a backend like Pyodide or an edge function)
- Add a "Copy" and "Reset" button

### 4. Additional Recommendations

Here are high-impact features I recommend adding:

| Feature | Impact | Effort |
|---------|--------|--------|
| **Search** across curriculum, resources, community | High -- usability | Medium |
| **Animated landing page** with Framer Motion | Medium -- polish | Low |
| **Progress persistence** (localStorage fallback before Supabase) | High -- retention | Low |
| **Mobile bottom navigation** | Medium -- mobile UX | Low |
| **PDF/formula sheet viewer** in Resources | Medium -- utility | Low |

### Technical Approach

**File changes summary:**

| File | Change |
|------|--------|
| `src/App.tsx` | Wrap with `ThemeProvider`, add `AuthProvider`, `ProtectedRoute` |
| `src/components/Navigation.tsx` | Add dark mode toggle, auth-aware nav |
| `src/components/ThemeToggle.tsx` | New -- Sun/Moon toggle component |
| `src/contexts/AuthContext.tsx` | New -- Supabase auth context |
| `src/components/ProtectedRoute.tsx` | New -- redirect to /auth if not logged in |
| `src/pages/Auth.tsx` | Replace mock with Supabase auth calls |
| `src/pages/Lesson.tsx` | Replace `<pre>` with Monaco Editor |
| `src/components/CodeEditor.tsx` | New -- Monaco Editor wrapper |
| `src/integrations/supabase/` | Auto-generated client config |

**New dependency:** `@monaco-editor/react`

### Implementation Order
1. Dark mode toggle (no backend needed, quick win)
2. Live code editor (no backend needed)
3. Backend & auth (requires Supabase connection)

**Note:** For step 3, you will need to connect Supabase first using the green Supabase button in the project sidebar. I will prompt you when we reach that step.

