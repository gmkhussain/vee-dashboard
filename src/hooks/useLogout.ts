import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';
import { removeToken } from '../store/features/userSlice';
import useAppSelector from './useAppSelector';

interface LogoutResponse {
  status: boolean;
}

const useLogout = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async (): Promise<void> => {
    try {
      if (!token) {
        dispatch(removeToken());
        navigate("/");
        return;
      }

      const { data: response } = await logout(token) as { data: LogoutResponse };

      if (response.status) {
        dispatch(removeToken());
        navigate("/");
      }

    } catch (error: any) {
      // console.error("Error during logout:", error);
    }
  };

  return onLogout;
};

export default useLogout;