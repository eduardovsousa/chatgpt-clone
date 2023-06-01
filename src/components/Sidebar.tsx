import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  open: boolean,
  onClose: () => void;
 }

const Sidebar = ({ open, onClose, children }: Props) => {
  return (
    <section className="">
      
    </section>
  )
}

export default Sidebar;