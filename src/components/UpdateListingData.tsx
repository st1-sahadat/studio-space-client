"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarPlus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TBooking } from "./Type/type"; import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PenLine } from "lucide-react"

const categories = [
    "Photo Studio",
    "Film Stage",
    "Podcast Lounge",
    "Music Suite",
    "Art Workshop",
];

const inputClasses =
    "h-10 rounded-md border-cyan-100 bg-cyan-50/70 text-sm text-gray-700 placeholder:text-gray-400 focus-visible:border-cyan-300 focus-visible:ring-cyan-200/60 dark:border-neutral-700 dark:bg-input/30 dark:text-neutral-200 dark:placeholder:text-neutral-500";

const UpdateListingData = ({ updateListing }: { updateListing: TBooking }) => {
    const router = useRouter();
    type TFormState = typeof updateListing;
    const [form, setForm] = useState<TFormState>(updateListing);
    const [submitted, setSubmitted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange =
        (field: keyof Omit<TFormState, "category">) =>
            (
                event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                >
            ) =>
                setForm((prev) => ({ ...prev, [field]: event.target.value }));
    const handleCategoryChange = (value: unknown) =>
        setForm((prev) => ({ ...prev, category: String(value ?? "") }));

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setIsLoading(true);
        setError(null);
        const { _id, ...updateData } = form;
        try {
            // const token = await getTokenFromClient();
            // if (!token) {
            //     throw new Error("You are not signed in. Please sign in and try again.");
            // }
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updateData),
            });
            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message || errorData?.msg || "Failed to update destination");
            }
            setIsOpen(false); 
            router.refresh();
        } catch (error) {
            console.error("PATCH Error:", error);
            setError(error instanceof Error ? error.message : "Failed to save changes.");
            alert("Failed to save changes. Check the console for details.");
        } finally {
            setIsLoading(false);
        }
    };
    const handleCancel = () => setForm(updateListing);
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                setIsOpen(open);
                if (open) setForm(updateListing);
            }}
        >
            <DialogTrigger render={<Button
                variant="outline"
                className="h-9 gap-2 rounded-md border-gray-200 px-4 text-sm text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
                <PenLine className="size-4" />
                Edit
            </Button>
            } />
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Edit Studio</DialogTitle>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
                                {/* Title */}
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="title"
                                        className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                    >
                                        Studio Title
                                    </Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="Sunlit Cyclorama Loft Studio"
                                        required
                                        aria-invalid={submitted && !form.title}
                                        className={inputClasses}
                                        value={form.title}
                                        onChange={handleInputChange("title")}
                                    />
                                </div>

                                {/* Category + Location */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <Label className="text-sm font-semibold text-gray-900 dark:text-neutral-50">
                                            Category
                                        </Label>
                                        <Select
                                            value={form.category}
                                            onValueChange={handleCategoryChange}
                                        >
                                            <SelectTrigger
                                                id="category"
                                                className="h-10 w-full rounded-md border-cyan-100 bg-cyan-50/70 text-sm text-gray-700 data-placeholder:text-gray-400 focus-visible:border-cyan-300 focus-visible:ring-cyan-200/60 dark:border-neutral-700 dark:bg-input/30 dark:text-neutral-200 dark:data-placeholder:text-neutral-500"
                                                aria-invalid={submitted && !form.category}
                                            >
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="location"
                                            className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                        >
                                            Location
                                        </Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            placeholder="Arts District, Los Angeles, CA"
                                            required
                                            aria-invalid={submitted && !form.location}
                                            className={inputClasses}
                                            value={form.location}
                                            onChange={handleInputChange("location")}
                                        />
                                    </div>
                                </div>

                                {/* Price per hour + Deposit */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="price_per_hour"
                                            className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                        >
                                            Price Per Hour (USD)
                                        </Label>
                                        <Input
                                            id="price_per_hour"
                                            name="price_per_hour"
                                            type="number"
                                            min={0}
                                            step="0.01"
                                            placeholder="e.g., 85"
                                            required
                                            aria-invalid={submitted && !form.price_per_hour}
                                            className={inputClasses}
                                            value={form.price_per_hour}
                                            onChange={handleInputChange("price_per_hour")}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="deposit"
                                            className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                        >
                                            Deposit (USD)
                                        </Label>
                                        <Input
                                            id="deposit"
                                            name="deposit"
                                            type="number"
                                            min={0}
                                            step="0.01"
                                            placeholder="e.g., 120"
                                            required
                                            aria-invalid={submitted && !form.deposit}
                                            className={inputClasses}
                                            value={form.deposit}
                                            onChange={handleInputChange("deposit")}
                                        />
                                    </div>
                                </div>

                                {/* Rating + Capacity */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="rating"
                                            className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                        >
                                            Rating (0 - 5)
                                        </Label>
                                        <Input
                                            id="rating"
                                            name="rating"
                                            type="number"
                                            min={0}
                                            max={5}
                                            step="0.1"
                                            placeholder="e.g., 4.8"
                                            required
                                            aria-invalid={submitted && !form.rating}
                                            className={inputClasses}
                                            value={form.rating}
                                            onChange={handleInputChange("rating")}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="capacity"
                                            className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                        >
                                            Capacity
                                        </Label>
                                        <Input
                                            id="capacity"
                                            name="capacity"
                                            placeholder="e.g., Up to 12 creators"
                                            required
                                            aria-invalid={submitted && !form.capacity}
                                            className={inputClasses}
                                            value={form.capacity}
                                            onChange={handleInputChange("capacity")}
                                        />
                                    </div>
                                </div>

                                {/* Image Link */}
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="image_link"
                                        className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                    >
                                        Image URL
                                    </Label>
                                    <Input
                                        id="image_link"
                                        name="image_link"
                                        type="url"
                                        placeholder="https://images.unsplash.com/photo-..."
                                        required
                                        aria-invalid={submitted && !form.image_link}
                                        className={inputClasses}
                                        value={form.image_link ?? ""}
                                        onChange={handleInputChange("image_link")}
                                    />
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="description"
                                        className="text-sm font-semibold text-gray-900 dark:text-neutral-50"
                                    >
                                        Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Describe the studio space, lighting, and amenities..."
                                        required
                                        rows={5}
                                        aria-invalid={submitted && !form.description}
                                        className="min-h-32 rounded-md border-cyan-100 bg-cyan-50/70 text-sm text-gray-700 placeholder:text-gray-400 focus-visible:border-cyan-300 focus-visible:ring-cyan-200/60 dark:border-neutral-700 dark:bg-input/30 dark:text-neutral-200 dark:placeholder:text-neutral-500"
                                        value={form.description}
                                        onChange={handleInputChange("description")}
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm font-medium text-red-500">{error}</p>
                                )}
                            </CardContent>

                            <CardFooter className="mt-2 flex justify-end gap-4 rounded-b-xl border-0 bg-transparent px-6 pb-0 pt-4 sm:px-8">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleCancel}
                                    className="h-10 gap-2 rounded-md border-red-200 px-5 text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/50 dark:hover:text-red-300"
                                >
                                    <Trash2 data-icon="inline-start" />
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="h-10 gap-2 rounded-md bg-cyan-600 px-5 text-sm font-medium text-white hover:bg-cyan-700 disabled:opacity-60"
                                >
                                    <CalendarPlus data-icon="inline-start" />
                                    {isLoading ? "Updating..." : "Update Studio"}
                                </Button>
                            </CardFooter>
                        </form>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
};

export default UpdateListingData;