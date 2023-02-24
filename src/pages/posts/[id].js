export async function getStaticPaths() {

    const paths = ["1", "2", "3"].map((post_id) => ({
        params: { id: post_id },
    }));
    // paths = [{params: { id: “1” }, {params: { id: “2” }, {params: {id: “3”}];

    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    return {
        // Passed to the page component as props
        props: { post: {} },
    };
}

export default function Post({ post }) {
    return <div>Omg this is so fun</div>;
}
  
  
  