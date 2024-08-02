export const createAuthSlice = (set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  logout: () => set({ userInfo: null }),
});
