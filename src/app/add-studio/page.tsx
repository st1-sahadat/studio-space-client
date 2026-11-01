"use client";
import { useState } from "react";
import { CalendarPlus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { getTokenFromClient } from "@/lib/getTokenFronClient";

const categories = [
  "Photo Studio",
  "Sound Stage",
  "Podcast Room",
  "Music Suite",
  "Art Workshop",
];

const initialForm = {
  title: "",
  category: "",
  price_per_hour: "",
  rating: "",
  location: "",
  capacity: "",
  deposit: "",
  image_link: "",
  description: "",
};

type TFormState = typeof initialForm;

const inputClasses =
  "h-10 rounded-md border-cyan-100 bg-cyan-50/70 text-sm text-gray-700 placeholder:text-gray-400 focus-visible:border-cyan-300 focus-visible:ring-cyan-200/60 dark:bg-input/30";

const AddStudioPage = () => {
  const [form, setForm] = useState<TFormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setError(null);
    setLoading(true);

    // Convert numeric strings to actual numbers to match your API payload
    const payload = {
      ...form,
      price_per_hour: Number(form.price_per_hour),
      rating: Number(form.rating),
      deposit: Number(form.deposit),
    };
    console.log(payload);
    
    try {
      // const token = await getTokenFromClient();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add-studio`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      await res.json();
      setForm(initialForm);
      setSubmitted(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError(null);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-4xl text-gray-900 md:text-[40px]">
          Add New Studio
        </h2>

        <Card className="mx-auto mt-12 gap-8 border-gray-200 py-8 shadow-sm sm:px-4">
          <form onSubmit={handleSubmit}>
            <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-semibold text-gray-900"
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
                  <Label className="text-sm font-semibold text-gray-900">
                    Category
                  </Label>
                  <Select
                    value={form.category}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger
                      id="category"
                      className="h-10 w-full rounded-md border-cyan-100 bg-cyan-50/70 text-sm text-gray-700 data-placeholder:text-gray-400 focus-visible:border-cyan-300 focus-visible:ring-cyan-200/60"
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
                    className="text-sm font-semibold text-gray-900"
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
                    className="text-sm font-semibold text-gray-900"
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
                    className="text-sm font-semibold text-gray-900"
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
                    className="text-sm font-semibold text-gray-900"
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
                    className="text-sm font-semibold text-gray-900"
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
                  className="text-sm font-semibold text-gray-900"
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
                  value={form.image_link}
                  onChange={handleInputChange("image_link")}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="description"
                  className="text-sm font-semibold text-gray-900"
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
                  className="min-h-32 rounded-md border-cyan-100 bg-cyan-50/70 text-sm text-gray-700 placeholder:text-gray-400 focus-visible:border-cyan-300 focus-visible:ring-cyan-200/60 dark:bg-input/30"
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
                className="h-10 gap-2 rounded-md border-red-200 px-5 text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 data-icon="inline-start" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="h-10 gap-2 rounded-md bg-cyan-600 px-5 text-sm font-medium text-white hover:bg-cyan-700 disabled:opacity-60"
              >
                <CalendarPlus data-icon="inline-start" />
                {loading ? "Adding..." : "Add Studio"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AddStudioPage;