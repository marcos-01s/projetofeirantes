import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ShoppingBag, Users, Calendar, Eye, Star } from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Vendas Hoje",
      value: "R$ 284,50",
      change: "+12%",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Produtos Ativos",
      value: "23",
      change: "4 novos",
      icon: ShoppingBag,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Visitantes",
      value: "47",
      change: "+8 hoje",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Pedidos",
      value: "12",
      change: "3 pendentes",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentProducts = [
    {
      name: "Tomate Orgânico",
      price: "R$ 8,50/kg",
      stock: "15 kg",
      views: 23,
      status: "Disponível",
    },
    {
      name: "Alface Crespa",
      price: "R$ 3,00/un",
      stock: "8 unidades",
      views: 18,
      status: "Disponível",
    },
    {
      name: "Cenoura",
      price: "R$ 4,50/kg",
      stock: "2 kg",
      views: 31,
      status: "Pouco Estoque",
    },
    {
      name: "Banana Prata",
      price: "R$ 6,00/kg",
      stock: "0 kg",
      views: 45,
      status: "Esgotado",
    },
  ];

  const recentActivity = [
    {
      action: "Nova venda",
      description: "3kg de Tomate Orgânico vendidos",
      time: "há 15 min",
      value: "R$ 25,50",
    },
    {
      action: "Produto visualizado",
      description: "Maria visualizou Alface Crespa",
      time: "há 32 min",
      value: null,
    },
    {
      action: "Estoque baixo",
      description: "Cenoura com apenas 2kg restantes",
      time: "há 1h",
      value: null,
    },
    {
      action: "Nova avaliação",
      description: "5 estrelas para Banana Prata",
      time: "há 2h",
      value: null,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-green-600" />
              <span>Meus Produtos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.price}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{product.stock}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{product.views}</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      product.status === "Disponível"
                        ? "default"
                        : product.status === "Pouco Estoque"
                        ? "secondary"
                        : "destructive"
                    }
                    className={
                      product.status === "Disponível"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : ""
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span>Atividade Recente</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  {activity.value && (
                    <div className="text-sm font-medium text-green-600">{activity.value}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span>Ações Rápidas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors group">
              <ShoppingBag className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-green-900">Adicionar Produto</p>
            </button>
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors group">
              <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-blue-900">Ver Minha Banca</p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors group">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-orange-900">Relatório Vendas</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors group">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-purple-900">Promoções</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};