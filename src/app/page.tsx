import { type FC } from "react"
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

const HomePage: FC = () => {
  return (
    <main>
      <h1>
        Home Page
      </h1>
    </main>
  )
}

export default HomePage