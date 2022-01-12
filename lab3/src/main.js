import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import signin from "./pages/signin";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/signin": () => {
        print(signin.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
});

router.resolve();