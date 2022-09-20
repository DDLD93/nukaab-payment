import create from "zustand";

interface User {
  Fname: string;
  Lname: string;
  email: string;
  phone: string;
}
const useStore = create((set:any) => ({
  user: null,
  setUser: (newUser: User) => set(() => ({ user: newUser })),
  removeUser: () => set({ user: {} }),
  darkMode:false,
  toggleMode:(mode:boolean)=>set(()=>({darkMode:mode})),
  dashboardRoute:null,
  setDashboardRoute:(path:string) => set(()=>({dashboardRoute:path})),
  collabeNavbar:false,
  setCollabeNavbar:(is:boolean) => set(()=>({collabeNavbar:is})),
}));

export default useStore;
