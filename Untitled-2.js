import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, ArrowLeft, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductFormProps {
  onClose: () => void;
}

export const ProductForm = ({ onClose }: ProductFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    unit: "",
    stock: "",
    description: "",
    image: "",
  });

  const categories = ["Verduras", "Frutas", "Legumes", "Temperos", "Orgânicos"];
  const units = ["kg", "unidade", "maço", "litro"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.category || !formData.price || !formData.unit || !formData.stock) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    // Simulate saving
    console.log("Saving product:", formData);
    
    toast({
      title: "Produto salvo!",
      description: `${formData.name} foi adicionado com sucesso`,
    });
    
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onClose} className="p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Novo Produto</h2>
          <p className="text-gray-600">Adicione um novo produto à sua banca</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image Upload */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Foto do Produto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Clique para adicionar foto</p>
                  <p className="text-xs text-gray-500">JPG, PNG até 5MB</p>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                />
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Informações do Produto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Produto *</Label>
                  <Input
                    id="name"
                    placeholder="Ex: Tomate Orgânico"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoria *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
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

                <div className="space-y-2">
                  <Label htmlFor="price">Preço *</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      className="pl-10"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unit">Unidade *</Label>
                  <Select value={formData.unit} onValueChange={(value) => handleInputChange("unit", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a unidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="stock">Quantidade em Estoque *</Label>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="Ex: 10"
                    value={formData.stock}
                    onChange={(e) => handleInputChange("stock", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva seu produto (origem, qualidade, etc.)"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Produto
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};