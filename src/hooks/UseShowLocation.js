import { useLocation } from 'react-router-dom';

export default function UseShowLocation() {
    const location = useLocation();

    const currentPath = location.pathname;
    const isActive = (arg) => currentPath.startsWith(arg);
    const isExactPath = (arg) => currentPath === arg;

  return {currentPath, isActive, isExactPath};
}
