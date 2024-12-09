import { Provider } from "../chakra_ui/provider"
import ApolloWrapper from "./components/providers/apollo-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          {children}
          <ApolloWrapper>{children}</ApolloWrapper>
        </Provider>
      </body>
    </html>
  );
}
