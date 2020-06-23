class App
  def all_customers
    Customer.order(:created_at).all
  end
  
#   def build_charity(attributes = {})
#       # NOTE currency is for now fixed to THB.
#       Charity.new(attributes.merge(total: 0, currency: "THB"))
#     end
  
#     def create_charity(attributes)
#       charity = build_charity(attributes)
#       charity.save
#       charity
#     end
  
#   def count_charities
#     Charity.count
#   end
  
  def find_customer(id)
    Customer.find_by(user_id: id)
  end
end
