"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { TBooking } from "./Type/type";
import { getTokenFromClient } from "@/lib/getTokenFronClient";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteListingData = ({ deleteListing }: { deleteListing: TBooking }) => {
    const { _id } = deleteListing;
    const router = useRouter();
    const handleDelete = async () => {
        try {
              const token = await getTokenFromClient();
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${_id}`, {
                method: "DELETE",
                headers: {
                  authorization: `Bearer ${token}`
                },
            });
            if (!res.ok) {
                throw new Error("Failed to delete destination");
            }
            toast.success("Studio listing deleted successfully!");
            router.push('/my-studio-list');
            router.refresh();
        } catch (error) {
            console.error("Delete Error:", error);
            alert("Failed to delete destination. Check the console for details.");
        }
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger render={
                    <Button
                        variant="outline"
                        className="h-9 gap-2 rounded-md border-red-200 bg-red-50/50 px-4 text-sm text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                        <Trash2 className="size-4" />
                        Delete
                    </Button>} />
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DeleteListingData;