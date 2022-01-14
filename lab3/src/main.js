import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import signin from "./pages/signin";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import signup from "./pages/signup";
import dashboard from "./admin/dashboard";
import news from "./admin/news";
import addnews from "./admin/addnews";

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
    "/signup": () => {
        print(signup.render());
    },
    "/dashboard": () => {
        print(dashboard.render());
    },
    "/news": () => {
        print(news.render());
    },
    "/add": () => {
        print(addnews.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
});

router.resolve();