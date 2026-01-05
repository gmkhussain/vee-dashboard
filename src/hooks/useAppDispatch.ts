import { AppDispatch } from "../store/store.interface";
import { useDispatch } from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
