import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Search, MapPin, Clock, Phone, Share2, Heart, ShoppingCart } from "lucide-react";

export const VirtualStand = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const standInfo = {
    name: "Banca da Dona Maria",
    description: "Produtos frescos e orgânicos direto do produtor",
    location: "Feira Livre - Centro",
    schedule: "Ter, Qui, Sáb - 6h às 14h",
    phone: "(11) 9 9999-9999",
    rating: 4.8,
    totalReviews: 127,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c5e832fe?w=100&h=100&fit=crop&crop=face",
  };

  const categories = ["all", "Verduras", "Frutas", "Legumes", "Temperos", "Orgânicos"];

  const products = [
    {
      id: 1,
      name: "Tomate Orgânico",
      category: "Verduras",
      price: 8.50,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop",
      inStock: true,
      rating: 4.8,
      reviews: 23,
    },
    {
      id: 2,
      name: "Alface Crespa",
      category: "Verduras",
      price: 3.00,
      unit: "unidade",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
      inStock: true,
      rating: 4.5,
      reviews: 18,
    },
    {
      id: 3,
      name: "Cenoura",
      category: "Legumes",
      price: 4.50,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop",
      inStock: true,
      rating: 4.7,
      reviews: 31,
      badge: "Pouco Estoque",
    },
    {
      id: 4,
      name: "Banana Prata",
      category: "Frutas",
      price: 6.00,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
      inStock: false,
      rating: 4.9,
      reviews: 45,
    },
    {
      id: 5,
      name: "Manjericão",
      category: "Temperos",
      price: 2.50,
      unit: "maço",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      inStock: true,
      rating: 4.6,
      reviews: 12,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Stand Header */}
      <Card className="bg-gradient-to-r from-green-50 to-orange-50 border-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={standInfo.avatar}
              alt={standInfo.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{standInfo.name}</h1>
                  <p className="text-gray-600 mt-1">{standInfo.description}</p>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{standInfo.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{standInfo.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{standInfo.rating}</span>
                      <span className="text-gray-500">({standInfo.totalReviews} avaliações)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Ligar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview Note */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-blue-800">
              <strong>Visualização da sua banca:</strong> É assim que os clientes veem seus produtos
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
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
                  {category === "all" ? "Todos" : category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-white">Esgotado</Badge>
                </div>
              )}
              {product.badge && product.inStock && (
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-2 left-2 bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                      <span className="text-sm font-normal text-gray-500">/{product.unit}</span>
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Adicionar ao Carrinho" : "Indisponível"}
                </Button>
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
                Tente ajustar seus filtros de busca
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};