import data from "../data";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div class="banner">
                <img src="./images/banner_03.jpg" width="1200px"/>
            </div>
            <div class="news">
                <h2 class="text-center py-3 uppercase text-lg font-bold text-blue-900">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}"">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
                <h2 class="text-center py-3 uppercase text-lg font-bold text-blue-900">Hoạt Động Sinh Viên</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}"">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        `;
    },
};

export default HomePage;