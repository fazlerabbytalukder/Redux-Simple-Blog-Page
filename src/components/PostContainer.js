import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import Post from './Post';

const PostContainer = () => {
    const { filtered_post: posts, filterBy } = useSelector((state) => state);
    const filter = Object.keys(filterBy);

    return (
        <section
            class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2
                        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>

                {/* if filtered then show filter option */}
                {filter.length > 0 &&
                    filter.map((name, index) => {
                        return <Filter key={index} name={name} value={filterBy[name]} />;
                    })}

                {/* if post not found */}
                {posts.length < 1 && (
                    <p className="text-xl font-bold text-red-400">No Post Found.</p>
                )}

                {/* <!-- card grid  --> */}
                <div
                    class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {/* <!-- single card  --> */}
                    {posts.map((post) => {
                        return <Post key={post.id} post={post} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default PostContainer;