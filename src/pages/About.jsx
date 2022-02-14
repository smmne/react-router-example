import queryString from 'query-string';

export default function About(props) {
    const searchParams = props.location.search;
    // const obj = new URLSearchParams(searchParams);
    // console.log(obj.get('name'));
    const query = queryString.parse(searchParams);
    return (
        <div>
            <h2>About 페이지입니다.</h2>
            {query.name && <p>name 은 {query.name} 입니다.</p>}
        </div>
    );
}