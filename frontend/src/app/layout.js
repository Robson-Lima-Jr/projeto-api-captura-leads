import "./globals.css";


export const metadata = {
  title: "Projeto cadastro leads API",
  description: "Cadastre-se. teste dados nao serao enviados",
  robots: "no-index",
  author: "Robson Lima Jr"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
