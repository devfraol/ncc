export type DashboardUser = {
  id: string;
  email?: string;
};

export async function getCurrentUser(): Promise<DashboardUser | null> {
  return null;
}

export async function requireDashboardUser(): Promise<DashboardUser | null> {
  const user = await getCurrentUser();

  return user;
}
