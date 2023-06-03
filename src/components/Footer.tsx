import ChatMessageInput from "./ChatMessageInput";

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
};

const name = "<Evs />";

const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full p-2">
      <div className="max-w-3xl m-auto">
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />
        <div className="pt-3 text-center text-xs text-gray-300 ">
          Feito por{" "}
          <a
            href="https://www.linkedin.com/in/eduardovsousa/"
            target="_blank"
            className="underline"
          >
            {name}
          </a>
          . Permitida a cópia e uso para qualuqer fim.
          <br />
          *Se a chave da API expirar, a aplicação não funcionará.{" "}
          <a
            href="https://www.linkedin.com/in/eduardovsousa/"
            target="_blank"
            className="italic underline"
          >
            Entre em contato para ajustar.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
