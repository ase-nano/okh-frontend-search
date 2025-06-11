import { FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Download, ExternalLink } from "lucide-react";

interface SeachResultItemProps {
    row: Record<string, string>;
}

const SearchResultItem: FC<SeachResultItemProps> = ({row}) => {
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-4/5 mr-2">

                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <h2 className="text-3xl font-normal mb-1 hover:underline hover:cursor-pointer">{row['name']}</h2>
                            </DialogTrigger>
                            <DialogContent className="min-w-6xl">
                                <DialogHeader>
                                    <DialogTitle><div className="text-3xl font-normal mb-1">{row['name']}</div></DialogTitle>
                                    <DialogDescription>
                                        <span className="mb-4">{row['proj_documentation_language']} | {row['proj_license']} | {row['proj_technology_readiness_level']} | {row['proj_documentation_readiness_level']}</span>
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="w-full">
                                    <div className="flex">
                                        <div className="w-4/5 mr-2">
                                            <div className="text-white">{row['proj_version']} - {row['proj_function']}</div>
                                        </div>
                                        <div className="w-1/5 ml-2">
                                            {row['proj_img_url'] && (<img src={row['proj_img_url']} alt="Project image" />)}
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <div className="w-full flex">
                                        <Button variant={"secondary"} className="mr-2">Manifest <Download /></Button>
                                        <Button variant={"secondary"} className="mr-2">Source <ExternalLink /></Button>
                                        <Button variant={"secondary"} className="mr-2">RDF-Data <Download /></Button>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <div className="mb-4">{row['proj_documentation_language']} | {row['proj_license']} | {row['proj_technology_readiness_level']} | {row['proj_documentation_readiness_level']}</div>
                        <div className="text-white">{row['proj_version']} - {row['proj_function']}</div>
                    </div>

                </div>
                <div className="w-1/5 ml-2">
                    {row['proj_img_url'] && (<img src={row['proj_img_url']} alt="Project image" />)}
                </div>
            </div>
            <hr className="my-8 border-white" />
        </div>
    );
}

export default SearchResultItem;