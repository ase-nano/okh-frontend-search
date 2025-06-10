import { FC } from "react";

interface SeachResultItemProps {
    row: Record<string, string>;
}

const SearchResultItem: FC<SeachResultItemProps> = ({row}) => {
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-4/5 mr-2">

                    <div className="mb-4">
                        <h4 className="text-xl text-white font-bold">test</h4>
                        <div>link to repo (wip) | {row['proj_documentation_language']} | {row['proj_license']} | {row['proj_technology_readiness_level']} | {row['proj_documentation_readiness_level']}</div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-normal mb-2">{row['name']}</h2>
                        <p className="text-white">{row['proj_function']}</p>
                    </div>

                </div>
                <div className="w-1/5 ml-2">
                    <img src={row['proj_img_url']} alt="Project image" />
                </div>
            </div>
            <hr className="my-8 border-white" />
        </div>
    );
}

export default SearchResultItem;