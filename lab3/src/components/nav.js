const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                <li><a href="#" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển sinh</a></li>
                <li><a href="#" class="block py-3 px-4 text-white hover:bg-blue-500">Chương Trình đào tạo</a></li>
                <li><a href="/admin/dashboard" class="block py-3 px-4 text-white hover:bg-blue-500">admin</a></li>
                <li><a href="/signin" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng nhập</a></li>
                <li><a href="/signup" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng ký</a></li>

                <form action="#" class="text-right"method="">
                    <input type="text" name="name" required>
                    <button type="submit" class="inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Tìm kiếm
                    </button>
                </form>   
            </ul>
            
        </nav>
        
        
        
        `;
    },
};
export default Nav;