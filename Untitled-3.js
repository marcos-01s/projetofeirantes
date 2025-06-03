import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Eye, Camera, Star } from "lucide-react";
import { ProductForm } from "@/components/ProductForm";

export const ProductManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Verduras", "Frutas", "Legumes", "Temperos", "Orgânicos"];

  const products = [
    {
      id: 1,
      name: "Tomate Orgânico",
      category: "Verduras",
      price: 8.50,
      unit: "kg",
      stock: 15,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop",
      status: "Disponível",
      views: 23,
      rating: 4.8,
      description: "Tomates orgânicos frescos, cultivados sem agrotóxicos",
    },
    {
      id: 2,
      name: "Alface Crespa",
      category: "Verduras",
      price: 3.00,
      unit: "unidade",
      stock: 8,
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=200&h=200&fit=crop",
      status: "Disponível",
      views: 18,
      rating: 4.5,
      description: "Alface crespa fresca, ideal para saladas",
    },
    {
      id: 3,
      name: "Cenoura",
      category: "Legumes",
      price: 4.50,
      unit: "kg",
      stock: 2,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop",
      status: "Pouco Estoque",
      views: 31,
      rating: 4.7,
      description: "Cenouras frescas e doces",
    },
    {
      id: 4,
      name: "Banana Prata",
      category: "Frutas",
      price: 6.00,
      unit: "kg",
      stock: 0,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop",
      status: "Esgotado",
      views: 45,
      rating: 4.9,
      description: "Bananas prata maduras e saborosas",
    },
    {
      id: 5,
      name: "Manjericão",
      category: "Temperos",
      price: 2.50,
      unit: "maço",
      stock: 12,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      status: "Disponível",
      views: 12,
      rating: 4.6,
      description: "Manjericão fresco para temperar seus pratos",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Disponível":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Disponível</Badge>;
      case "Pouco Estoque":
        return <Badge variant="secondary">Pouco Estoque</Badge>;
      case "Esgotado":
        return <Badge variant="destructive">Esgotado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (showForm) {
    return <ProductForm onClose={() => setShowForm(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Produtos</h2>
          <p className="text-gray-600">Adicione, edite e organize seus produtos</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-green-500 to-orange-500" : ""}
                >
                  {category === "all" ? "Todas" : category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2">
                {getStatusBadge(product.status)}
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                <div className="flex items-center space-x-1 text-white text-sm">
                  <Eye className="h-3 w-3" />
                  <span>{product.views}</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                      <span className="text-sm font-normal text-gray-500">/{product.unit}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Estoque: {product.stock} {product.unit === "kg" ? "kg" : "un"}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="h-3 w-3 mr-1" />
                    Editar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    Ver
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Nenhum produto encontrado</h3>
              <p className="text-gray-600">
                Tente ajustar seus filtros ou adicione um novo produto
              </p>
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
              >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Produto
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
