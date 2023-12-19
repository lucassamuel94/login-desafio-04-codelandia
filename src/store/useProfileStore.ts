import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  userLogin: boolean,
  userName: string | null
}

type Action = {
  setUserLogin: (value: boolean) => void
  setUserName: (name: string) => void
}

const useProfileStore = create(
  persist<State & Action>((set) => ({
      userLogin: false,
      userName: '',
      setUserLogin: (value) => set(() => ({ userLogin: value })),
      setUserName: (name) => set(() => ({ userName: name })),
  }),{
    name: 'user-profile',
    storage: createJSONStorage(() => sessionStorage)
  })
);
  
  export default useProfileStore