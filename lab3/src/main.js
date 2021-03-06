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
import editnews from "./admin/editnews";

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
    "/admin/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/news": () => {
        print(news.render());
    },
    "/admin/news/add": () => {
        print(addnews.render());
    },
    "/edit": () => {
        print(editnews.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
});

router.resolve();