import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store.interface";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
