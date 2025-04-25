import {NotificationEmp} from "./Notification.styled"


interface NotificationProps {
  message: string;
}

export const Notification = ({ message }: NotificationProps) => {
  return <NotificationEmp>{message}</NotificationEmp>;
};